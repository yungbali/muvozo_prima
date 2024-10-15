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
export declare type TransactionCreateFormInputValues = {
    amount?: number;
    type?: string;
    description?: string;
    date?: string;
};
export declare type TransactionCreateFormValidationValues = {
    amount?: ValidationFunction<number>;
    type?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TransactionCreateFormOverridesProps = {
    TransactionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TransactionCreateFormProps = React.PropsWithChildren<{
    overrides?: TransactionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TransactionCreateFormInputValues) => TransactionCreateFormInputValues;
    onSuccess?: (fields: TransactionCreateFormInputValues) => void;
    onError?: (fields: TransactionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TransactionCreateFormInputValues) => TransactionCreateFormInputValues;
    onValidate?: TransactionCreateFormValidationValues;
} & React.CSSProperties>;
export default function TransactionCreateForm(props: TransactionCreateFormProps): React.ReactElement;
