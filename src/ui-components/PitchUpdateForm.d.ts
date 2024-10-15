/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Pitch } from "../API.ts";
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
export declare type PitchUpdateFormInputValues = {
    title?: string;
    description?: string;
    audioFileUrl?: string;
    status?: string;
    submissionDate?: string;
};
export declare type PitchUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    audioFileUrl?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    submissionDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PitchUpdateFormOverridesProps = {
    PitchUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    audioFileUrl?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    submissionDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PitchUpdateFormProps = React.PropsWithChildren<{
    overrides?: PitchUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pitch?: Pitch;
    onSubmit?: (fields: PitchUpdateFormInputValues) => PitchUpdateFormInputValues;
    onSuccess?: (fields: PitchUpdateFormInputValues) => void;
    onError?: (fields: PitchUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PitchUpdateFormInputValues) => PitchUpdateFormInputValues;
    onValidate?: PitchUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PitchUpdateForm(props: PitchUpdateFormProps): React.ReactElement;
