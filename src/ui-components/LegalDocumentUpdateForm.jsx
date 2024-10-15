/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getLegalDocument } from "../graphql/queries";
import { updateLegalDocument } from "../graphql/mutations";
const client = generateClient();
export default function LegalDocumentUpdateForm(props) {
  const {
    id: idProp,
    legalDocument: legalDocumentModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    description: "",
    fileUrl: "",
    status: "",
    uploadDate: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [fileUrl, setFileUrl] = React.useState(initialValues.fileUrl);
  const [status, setStatus] = React.useState(initialValues.status);
  const [uploadDate, setUploadDate] = React.useState(initialValues.uploadDate);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = legalDocumentRecord
      ? { ...initialValues, ...legalDocumentRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setDescription(cleanValues.description);
    setFileUrl(cleanValues.fileUrl);
    setStatus(cleanValues.status);
    setUploadDate(cleanValues.uploadDate);
    setErrors({});
  };
  const [legalDocumentRecord, setLegalDocumentRecord] = React.useState(
    legalDocumentModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getLegalDocument.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getLegalDocument
        : legalDocumentModelProp;
      setLegalDocumentRecord(record);
    };
    queryData();
  }, [idProp, legalDocumentModelProp]);
  React.useEffect(resetStateValues, [legalDocumentRecord]);
  const validations = {
    title: [{ type: "Required" }],
    description: [],
    fileUrl: [{ type: "Required" }],
    status: [{ type: "Required" }],
    uploadDate: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          description: description ?? null,
          fileUrl,
          status,
          uploadDate,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateLegalDocument.replaceAll("__typename", ""),
            variables: {
              input: {
                id: legalDocumentRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "LegalDocumentUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              description,
              fileUrl,
              status,
              uploadDate,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description: value,
              fileUrl,
              status,
              uploadDate,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="File url"
        isRequired={true}
        isReadOnly={false}
        value={fileUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              fileUrl: value,
              status,
              uploadDate,
            };
            const result = onChange(modelFields);
            value = result?.fileUrl ?? value;
          }
          if (errors.fileUrl?.hasError) {
            runValidationTasks("fileUrl", value);
          }
          setFileUrl(value);
        }}
        onBlur={() => runValidationTasks("fileUrl", fileUrl)}
        errorMessage={errors.fileUrl?.errorMessage}
        hasError={errors.fileUrl?.hasError}
        {...getOverrideProps(overrides, "fileUrl")}
      ></TextField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              fileUrl,
              status: value,
              uploadDate,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option
          children="Draft"
          value="DRAFT"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Signed"
          value="SIGNED"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Expired"
          value="EXPIRED"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Upload date"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={uploadDate && convertToLocal(new Date(uploadDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              title,
              description,
              fileUrl,
              status,
              uploadDate: value,
            };
            const result = onChange(modelFields);
            value = result?.uploadDate ?? value;
          }
          if (errors.uploadDate?.hasError) {
            runValidationTasks("uploadDate", value);
          }
          setUploadDate(value);
        }}
        onBlur={() => runValidationTasks("uploadDate", uploadDate)}
        errorMessage={errors.uploadDate?.errorMessage}
        hasError={errors.uploadDate?.hasError}
        {...getOverrideProps(overrides, "uploadDate")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || legalDocumentModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || legalDocumentModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
