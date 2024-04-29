import { FormEvent, FormEventHandler, useState } from "react";

interface Error {
  isError: boolean;
  message: string;
}

interface State {
  error: Error | null;
  isLoading: boolean;
}

export function useActionState(
  action: Function
): [State, FormEventHandler<HTMLFormElement>] {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const res = await action(formData);
    if (res?.isError) {
      setError(res);
    } else {
      form.reset();
      setError(null);
    }
    setIsLoading(false);
  };

  const state = { error, isLoading };

  return [state, handleSubmit];
}
