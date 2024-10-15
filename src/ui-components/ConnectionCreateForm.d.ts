/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ConnectionCreateFormInputValues = {
    name?: string;
    role?: string;
    email?: string;
    status?: string;
};
export declare type ConnectionCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    role?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConnectionCreateFormOverridesProps = {
    ConnectionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    role?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ConnectionCreateFormProps = React.PropsWithChildren<{
    overrides?: ConnectionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ConnectionCreateFormInputValues) => ConnectionCreateFormInputValues;
    onSuccess?: (fields: ConnectionCreateFormInputValues) => void;
    onError?: (fields: ConnectionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConnectionCreateFormInputValues) => ConnectionCreateFormInputValues;
    onValidate?: ConnectionCreateFormValidationValues;
} & React.CSSProperties>;
export default function ConnectionCreateForm(props: ConnectionCreateFormProps): React.ReactElement;
