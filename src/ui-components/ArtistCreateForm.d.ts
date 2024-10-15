/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ArtistCreateFormInputValues = {
    name?: string;
    email?: string;
    bio?: string;
    genres?: string[];
    socialLinks?: string;
};
export declare type ArtistCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    bio?: ValidationFunction<string>;
    genres?: ValidationFunction<string>;
    socialLinks?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ArtistCreateFormOverridesProps = {
    ArtistCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    bio?: PrimitiveOverrideProps<TextFieldProps>;
    genres?: PrimitiveOverrideProps<TextFieldProps>;
    socialLinks?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type ArtistCreateFormProps = React.PropsWithChildren<{
    overrides?: ArtistCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ArtistCreateFormInputValues) => ArtistCreateFormInputValues;
    onSuccess?: (fields: ArtistCreateFormInputValues) => void;
    onError?: (fields: ArtistCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ArtistCreateFormInputValues) => ArtistCreateFormInputValues;
    onValidate?: ArtistCreateFormValidationValues;
} & React.CSSProperties>;
export default function ArtistCreateForm(props: ArtistCreateFormProps): React.ReactElement;
