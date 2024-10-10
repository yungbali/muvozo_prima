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
export declare type AnalyticsEventCreateFormInputValues = {
    eventType?: string;
    eventData?: string;
    timestamp?: string;
};
export declare type AnalyticsEventCreateFormValidationValues = {
    eventType?: ValidationFunction<string>;
    eventData?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnalyticsEventCreateFormOverridesProps = {
    AnalyticsEventCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    eventType?: PrimitiveOverrideProps<TextFieldProps>;
    eventData?: PrimitiveOverrideProps<TextAreaFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AnalyticsEventCreateFormProps = React.PropsWithChildren<{
    overrides?: AnalyticsEventCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AnalyticsEventCreateFormInputValues) => AnalyticsEventCreateFormInputValues;
    onSuccess?: (fields: AnalyticsEventCreateFormInputValues) => void;
    onError?: (fields: AnalyticsEventCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AnalyticsEventCreateFormInputValues) => AnalyticsEventCreateFormInputValues;
    onValidate?: AnalyticsEventCreateFormValidationValues;
} & React.CSSProperties>;
export default function AnalyticsEventCreateForm(props: AnalyticsEventCreateFormProps): React.ReactElement;
