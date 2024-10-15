/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EducationProgress } from "../API.ts";
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
export declare type EducationProgressUpdateFormInputValues = {
    completedLessons?: number;
    lastAccessedDate?: string;
};
export declare type EducationProgressUpdateFormValidationValues = {
    completedLessons?: ValidationFunction<number>;
    lastAccessedDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EducationProgressUpdateFormOverridesProps = {
    EducationProgressUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    completedLessons?: PrimitiveOverrideProps<TextFieldProps>;
    lastAccessedDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EducationProgressUpdateFormProps = React.PropsWithChildren<{
    overrides?: EducationProgressUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    educationProgress?: EducationProgress;
    onSubmit?: (fields: EducationProgressUpdateFormInputValues) => EducationProgressUpdateFormInputValues;
    onSuccess?: (fields: EducationProgressUpdateFormInputValues) => void;
    onError?: (fields: EducationProgressUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EducationProgressUpdateFormInputValues) => EducationProgressUpdateFormInputValues;
    onValidate?: EducationProgressUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EducationProgressUpdateForm(props: EducationProgressUpdateFormProps): React.ReactElement;
