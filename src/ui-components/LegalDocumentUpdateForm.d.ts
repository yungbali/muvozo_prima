/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { LegalDocument } from "../API.ts";
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
export declare type LegalDocumentUpdateFormInputValues = {
    title?: string;
    description?: string;
    fileUrl?: string;
    status?: string;
    uploadDate?: string;
};
export declare type LegalDocumentUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    fileUrl?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    uploadDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LegalDocumentUpdateFormOverridesProps = {
    LegalDocumentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    fileUrl?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    uploadDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LegalDocumentUpdateFormProps = React.PropsWithChildren<{
    overrides?: LegalDocumentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    legalDocument?: LegalDocument;
    onSubmit?: (fields: LegalDocumentUpdateFormInputValues) => LegalDocumentUpdateFormInputValues;
    onSuccess?: (fields: LegalDocumentUpdateFormInputValues) => void;
    onError?: (fields: LegalDocumentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LegalDocumentUpdateFormInputValues) => LegalDocumentUpdateFormInputValues;
    onValidate?: LegalDocumentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LegalDocumentUpdateForm(props: LegalDocumentUpdateFormProps): React.ReactElement;
