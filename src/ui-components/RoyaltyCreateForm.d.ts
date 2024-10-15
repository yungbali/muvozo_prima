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
export declare type RoyaltyCreateFormInputValues = {
    amount?: number;
    source?: string;
    date?: string;
};
export declare type RoyaltyCreateFormValidationValues = {
    amount?: ValidationFunction<number>;
    source?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RoyaltyCreateFormOverridesProps = {
    RoyaltyCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
    source?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RoyaltyCreateFormProps = React.PropsWithChildren<{
    overrides?: RoyaltyCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RoyaltyCreateFormInputValues) => RoyaltyCreateFormInputValues;
    onSuccess?: (fields: RoyaltyCreateFormInputValues) => void;
    onError?: (fields: RoyaltyCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RoyaltyCreateFormInputValues) => RoyaltyCreateFormInputValues;
    onValidate?: RoyaltyCreateFormValidationValues;
} & React.CSSProperties>;
export default function RoyaltyCreateForm(props: RoyaltyCreateFormProps): React.ReactElement;
