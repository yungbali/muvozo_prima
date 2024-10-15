/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AnalyticsEvent } from "../API.ts";
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
export declare type AnalyticsEventUpdateFormInputValues = {
    eventType?: string;
    eventData?: string;
    timestamp?: string;
};
export declare type AnalyticsEventUpdateFormValidationValues = {
    eventType?: ValidationFunction<string>;
    eventData?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnalyticsEventUpdateFormOverridesProps = {
    AnalyticsEventUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    eventType?: PrimitiveOverrideProps<TextFieldProps>;
    eventData?: PrimitiveOverrideProps<TextAreaFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AnalyticsEventUpdateFormProps = React.PropsWithChildren<{
    overrides?: AnalyticsEventUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    analyticsEvent?: AnalyticsEvent;
    onSubmit?: (fields: AnalyticsEventUpdateFormInputValues) => AnalyticsEventUpdateFormInputValues;
    onSuccess?: (fields: AnalyticsEventUpdateFormInputValues) => void;
    onError?: (fields: AnalyticsEventUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AnalyticsEventUpdateFormInputValues) => AnalyticsEventUpdateFormInputValues;
    onValidate?: AnalyticsEventUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AnalyticsEventUpdateForm(props: AnalyticsEventUpdateFormProps): React.ReactElement;
