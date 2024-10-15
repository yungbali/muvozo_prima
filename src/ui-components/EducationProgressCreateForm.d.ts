/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EducationProgressCreateFormInputValues = {
    completedLessons?: number;
    lastAccessedDate?: string;
};
export declare type EducationProgressCreateFormValidationValues = {
    completedLessons?: ValidationFunction<number>;
    lastAccessedDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EducationProgressCreateFormOverridesProps = {
    EducationProgressCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    completedLessons?: PrimitiveOverrideProps<TextFieldProps>;
    lastAccessedDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EducationProgressCreateFormProps = React.PropsWithChildren<{
    overrides?: EducationProgressCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EducationProgressCreateFormInputValues) => EducationProgressCreateFormInputValues;
    onSuccess?: (fields: EducationProgressCreateFormInputValues) => void;
    onError?: (fields: EducationProgressCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EducationProgressCreateFormInputValues) => EducationProgressCreateFormInputValues;
    onValidate?: EducationProgressCreateFormValidationValues;
} & React.CSSProperties>;
export default function EducationProgressCreateForm(props: EducationProgressCreateFormProps): React.ReactElement;
