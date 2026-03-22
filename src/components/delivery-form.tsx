"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Delivery } from "@/types";
import { useCheckoutContext } from "@/contexts/checkout/use-checkout-context";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export function DeliveryForm() {
  const { setFulfillmentDetails, addStep } = useCheckoutContext();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Delivery>();

  const onSubmit: SubmitHandler<Delivery> = (data) => {
    setFulfillmentDetails(data);
    addStep("delivery");
    router.push("/checkout/review");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 border-2 border-brand-grey-300 rounded-3xl mt-6 flex flex-col gap-12"
    >
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col">
          <label className="pl-4 mb-1.5">
            Name <span className="text-brand-warning-primary">*</span>
          </label>
          <input
            className="border border-brand-grey-300 py-2 px-4 rounded-3xl"
            placeholder="John smith"
            {...register("name", { required: true })}
          />
          {errors.name && <span>Name is required</span>}
        </div>

        <div className="flex flex-col">
          <label className="pl-4 mb-1.5">
            Phone <span className="text-brand-warning-primary">*</span>
          </label>
          <input
            className="border border-brand-grey-300 py-2 px-4 rounded-3xl"
            placeholder="444 4242"
            {...register("telephone", {
              required: true,
              minLength: 7,
              maxLength: 15,
              pattern: /^[0-9+\s()-]+$/,
            })}
          />
          {errors.telephone?.type === "required" && (
            <span>Phone number is required</span>
          )}
          {errors.telephone?.type === "minLength" && (
            <span>Phone number is too short</span>
          )}
          {errors.telephone?.type === "maxLength" && (
            <span>Phone number is too long</span>
          )}
          {errors.telephone?.type === "pattern" && (
            <span>Invalid characters in phone number</span>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between gap-4">
        <div className="flex flex-col">
          <label className="pl-4 mb-1.5">
            Address <span className="text-brand-warning-primary">*</span>
          </label>
          <input
            className="border border-brand-grey-300 py-2 px-4 rounded-3xl"
            placeholder="Enter address"
            {...register("address", { required: true })}
          />
          {errors.address?.type === "required" && (
            <span>Address is required</span>
          )}
        </div>

        <div className="flex flex-col">
          <label className="pl-4 mb-1.5">
            City <span className="text-brand-warning-primary">*</span>
          </label>
          <input
            className="border border-brand-grey-300 py-2 px-4 rounded-3xl"
            placeholder="Enter city"
            {...register("city", { required: true })}
          />
          {errors.city?.type === "required" && <span>City is required</span>}
        </div>

        <div className="flex flex-col">
          <label className="pl-4 mb-1.5">
            Postal code <span className="text-brand-warning-primary">*</span>
          </label>
          <input
            className="border border-brand-grey-300 py-2 px-4 rounded-3xl"
            placeholder="Enter postal code"
            {...register("postalCode", { required: true })}
          />
          {errors.postalCode?.type === "required" && (
            <span>Postal code is required</span>
          )}
        </div>
      </div>

      <Button variant="action" size="md" type="submit">
        Submit
      </Button>
    </form>
  );
}
