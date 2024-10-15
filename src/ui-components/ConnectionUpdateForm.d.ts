/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Connection } from "../API.ts";
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
export declare type ConnectionUpdateFormInputValues = {
    name?: string;
    role?: string;
    email?: string;
    status?: string;
};
export declare type ConnectionUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    role?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConnectionUpdateFormOverridesProps = {
    ConnectionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    role?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ConnectionUpdateFormProps = React.PropsWithChildren<{
    overrides?: ConnectionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    connection?: Connection;
    onSubmit?: (fields: ConnectionUpdateFormInputValues) => ConnectionUpdateFormInputValues;
    onSuccess?: (fields: ConnectionUpdateFormInputValues) => void;
    onError?: (fields: ConnectionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConnectionUpdateFormInputValues) => ConnectionUpdateFormInputValues;
    onValidate?: ConnectionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ConnectionUpdateForm(props: ConnectionUpdateFormProps): React.ReactElement;
