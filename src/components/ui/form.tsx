import { Label, LabelProps } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import React, { createContext, useContext, useId, useRef } from "react";
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form";

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = createContext<FormFieldContextValue | null>(null);

const useFormFieldContext = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useFormItemContext();

  if (!fieldContext) {
    throw new Error("useFormFieldContext는 FormField 컴포넌트 안에서만 사용할 수 있습니다.");
  }

  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formLabelId: `${id}-form-item-label`,
    formDescriptionId: `${id}-form-item-description`,
    formErrorMessageId: `${id}-form-item-error-message`,
    ...fieldState,
  };
};

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

type FormItemContextValue = {
  id: string;
  formLabelRef: React.RefObject<HTMLLabelElement>;
  formDescriptionRef: React.RefObject<HTMLParagraphElement>;
  formErrorMessageRef: React.RefObject<HTMLParagraphElement>;
};

const FormItemContext = createContext<FormItemContextValue | null>(null);

interface FormItemContextProviderProps {
  children: React.ReactNode;
}

const FormItemContextProvider = ({ children }: FormItemContextProviderProps) => {
  const id = useId();
  const formLabelRef = useRef<HTMLLabelElement>(null);
  const formDescriptionRef = useRef<HTMLParagraphElement>(null);
  const formErrorMessageRef = useRef<HTMLParagraphElement>(null);

  return (
    <FormItemContext.Provider value={{ id, formLabelRef, formDescriptionRef, formErrorMessageRef }}>
      {children}
    </FormItemContext.Provider>
  );
};

const useFormItemContext = () => {
  const context = useContext(FormItemContext);

  if (!context) {
    throw new Error("useFormItemContext는 FormItem 컴포넌트 안에서만 사용할 수 있습니다.");
  }

  return context;
};

interface FormItemProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const FormItem = React.forwardRef<HTMLDivElement, FormItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <FormItemContextProvider>
        <div className={cn(className)} ref={ref} {...props}>
          {children}
        </div>
      </FormItemContextProvider>
    );
  },
);
FormItem.displayName = "Form.Item";

interface FormControlProps {
  children: React.ReactNode;
}

const FormControl = ({ children }: FormControlProps) => {
  const { error, formDescriptionId, formErrorMessageId, formLabelId } = useFormFieldContext();

  const { formDescriptionRef, formErrorMessageRef } = useFormItemContext();

  const ariaDescribedBy = cn(
    formDescriptionRef.current && formDescriptionId,
    formErrorMessageRef.current && formErrorMessageId,
  );

  return (
    <Slot
      aria-invalid={!!error}
      aria-labelledby={formLabelId}
      aria-describedby={ariaDescribedBy || undefined}
    >
      {children}
    </Slot>
  );
};

interface FormLabelProps extends LabelProps {}

const FormLabel = ({ className, children, ...props }: FormLabelProps) => {
  const { formLabelId } = useFormFieldContext();
  const { formLabelRef } = useFormItemContext();

  return (
    <Label className={cn("mb-2", className)} ref={formLabelRef} id={formLabelId} {...props}>
      {children}
    </Label>
  );
};

interface FormDescriptionProps extends React.ComponentPropsWithoutRef<"p"> {}

export const FormDescription = React.forwardRef<HTMLParagraphElement, FormDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p className={cn("ml-1.5 mt-1 text-[13px] text-sub", className)} ref={ref} {...props}>
        {children}
      </p>
    );
  },
);
FormDescription.displayName = "Form.Description";

interface FormErrorMessageProps extends React.ComponentPropsWithoutRef<"p"> {}

const FormErrorMessage = React.forwardRef<HTMLParagraphElement, FormErrorMessageProps>(
  ({ className, children, ...props }, ref) => {
    const { error, formErrorMessageId } = useFormFieldContext();
    const body = children ?? String(error?.message);

    if (!body || !error) {
      return null;
    }

    return (
      <p
        className={cn("ml-1.5 mt-1 text-[13px] font-medium text-error", className)}
        id={formErrorMessageId}
        ref={ref}
        {...props}
      >
        {body}
      </p>
    );
  },
);
FormErrorMessage.displayName = "Form.ErrorMessage";

export const Form = Object.assign(FormProvider, {
  Field: FormField,
  Item: FormItem,
  Control: FormControl,
  Label: FormLabel,
  Description: FormDescription,
  ErrorMessage: FormErrorMessage,
});
