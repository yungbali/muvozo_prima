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
export declare type PitchCreateFormInputValues = {
    title?: string;
    description?: string;
    audioFileUrl?: string;
    status?: string;
    submissionDate?: string;
};
export declare type PitchCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    audioFileUrl?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    submissionDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PitchCreateFormOverridesProps = {
    PitchCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    audioFileUrl?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    submissionDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PitchCreateFormProps = React.PropsWithChildren<{
    overrides?: PitchCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PitchCreateFormInputValues) => PitchCreateFormInputValues;
    onSuccess?: (fields: PitchCreateFormInputValues) => void;
    onError?: (fields: PitchCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PitchCreateFormInputValues) => PitchCreateFormInputValues;
    onValidate?: PitchCreateFormValidationValues;
} & React.CSSProperties>;
export default function PitchCreateForm(props: PitchCreateFormProps): React.ReactElement;
