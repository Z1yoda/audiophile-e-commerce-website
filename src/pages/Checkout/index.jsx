import React from 'react'
import './index.css'
import Summary from '../../Components/Summary'

function Checkout() {
    return (
        <div className='checkout-wrapper'>
            <div className="container d-flex justify-center">
                <div className="checkoutForm">
                    <h6>Go Back</h6>
                    <form className="form form-wrapper" >
                        <h3 className="formTitle">Checkout</h3>

                        <div className="formBilling">
                            <p className="formSubtitle">Billing Details</p>
                            <div className="formName">
                                <label className="formLabel" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    placeholder="Name"
                                    className="formInput"
                                    type="name"
                                    name="name"
                                />
                            </div>
                            <div className="formEmail">
                                <label className="formLabel" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    placeholder="example@mail.com"
                                    className={`formInput`}
                                    type="email"
                                    name="email"

                                />

                            </div>
                            <div className="formPhone">
                                <label className="formLabel" htmlFor="tel">
                                    Phone Number
                                </label>
                                <input
                                    placeholder="+49151163303"
                                    className="formInput"
                                    type="tel"
                                    name="tel"

                                />
                            </div>
                        </div>

                        <div className="formShippingInfo">
                            <p className="formSubtitle">Shipping Info</p>
                            <div className="formAddress">
                                <label className="formLabel" htmlFor="address">
                                    Address
                                </label>
                                <input
                                    placeholder="Am Felde 58"
                                    className="formInput"
                                    type="address"
                                    name="address"

                                />

                            </div>
                            <div className="formZipcode">
                                <label className="formLabel" htmlFor="zipcode">
                                    ZIP Code
                                </label>
                                <input
                                    placeholder="10178"
                                    className="formInput"
                                    type="zipcode"
                                    name="zipcode"

                                />

                            </div>
                            <div className="formCity">
                                <label className="formLabel" htmlFor="city">
                                    City
                                </label>
                                <input
                                    placeholder="Berlin"
                                    className="formInput"
                                    type="city"
                                    name="city"

                                />

                            </div>
                            <div className="formCountry">
                                <label className="formLabel" htmlFor="country">
                                    Country
                                </label>
                                <input
                                    placeholder="Germany"
                                    className="formInput"
                                    type="country"
                                    name="country"

                                />

                            </div>
                        </div>
                        <div role="group" className="formPayment">
                            <p className="formSubtitle">Payment Method</p>
                            <div className="formPaymentOption">
                                <input
                                    className="formRadio"
                                    id="paymentChoice1"
                                    type="radio"
                                    name="payment"
                                    value="credit"
                                />
                                <label className="formLabel" htmlFor="paymentChoice1">
                                    Credit Card
                                </label>
                            </div>
                            <div className="formPaymentOption">
                                <input
                                    id="paymentChoice2"
                                    className="formRadio"
                                    type="radio"
                                    name="payment"
                                    value="cash"
                                />
                                <label className="formLabel" htmlFor="paymentChoice2">
                                    Cash on Delivery
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="summary">
                    <Summary></Summary>
                </div>
            </div>
        </div>
    )
}

export default Checkout