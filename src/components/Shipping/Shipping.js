import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'
const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const { user } = useAuth();
    return (
        <div>
            <h2>This is shipping</h2>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="Name" defaultValue={user.displayName} {...register("name")} />

                <input placeholder="Email" defaultValue={user.email} {...register("email", { required: true })} />

                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="Phone" defaultValue="" {...register("phone")} />

                {errors.email && <span className="error">This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;