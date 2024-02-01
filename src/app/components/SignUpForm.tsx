"use client";
import { UserIcon, EnvelopeIcon, PhoneIcon, KeyIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { Button, Checkbox, Input, Link } from "@nextui-org/react";
import { useState } from "react";

const SignUpForm = () => {
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const toggleVisiblePass = () => setIsVisiblePass((prev) => !prev);
  return (
    <form className="grid grid-cols-2 gap-3 p-2 place-self-stretch shadow border rounded-md">
      <Input label="First Name" startContent={<UserIcon className="w-4" />} />
      <Input label="Last Name" startContent={<UserIcon className="w-4" />} />
      <Input className="col-span-2" label="Email" startContent={<EnvelopeIcon className="w-4" />} />
      <Input className="col-span-2" label="Phone" startContent={<PhoneIcon className="w-4" />} />
      <Input
        className="col-span-2"
        label="Password"
        type={isVisiblePass ? "text" : "password"}
        startContent={<KeyIcon className="w-4" />}
        endContent={
          isVisiblePass ? (
            <EyeSlashIcon className="w-4 curs cursor-pointer" onClick={toggleVisiblePass} />
          ) : (
            <EyeIcon className="w-4 curs cursor-pointer" onClick={toggleVisiblePass} />
          )
        }
      />
      <Input
        className="col-span-2"
        label="Confirm Password"
        type={isVisiblePass ? "text" : "password"}
        startContent={<KeyIcon className="w-4" />}
      />
      <Checkbox className="col-span-2">
        I Accept The <Link href="/terms">Terms</Link>
      </Checkbox>
      <div className="flex justify-center col-span-2">
        <Button className="w-48" color="primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
