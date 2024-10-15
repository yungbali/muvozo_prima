/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Royalty } from "../API.ts";
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
export declare type RoyaltyUpdateFormInputValues = {
    amount?: number;
    source?: string;
    date?: string;
};
export declare type RoyaltyUpdateFormValidationValues = {
    amount?: ValidationFunction<number>;
    source?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RoyaltyUpdateFormOverridesProps = {
    RoyaltyUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
    source?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RoyaltyUpdateFormProps = React.PropsWithChildren<{
    overrides?: RoyaltyUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    royalty?: Royalty;
    onSubmit?: (fields: RoyaltyUpdateFormInputValues) => RoyaltyUpdateFormInputValues;
    onSuccess?: (fields: RoyaltyUpdateFormInputValues) => void;
    onError?: (fields: RoyaltyUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RoyaltyUpdateFormInputValues) => RoyaltyUpdateFormInputValues;
    onValidate?: RoyaltyUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RoyaltyUpdateForm(props: RoyaltyUpdateFormProps): React.ReactElement;
