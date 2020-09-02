import React, { Component } from 'react';
import './Results.css';

export default class Results extends Component {
    constructor(props){
        super(props)
        this.state={
            payments: '',
            interestPaid: '',
            amount: ''
        }
    }

    renderCalculations(amount, months, years, rate){
        const interestRate = (rate*years/months/100);
        const totalInterest = (1+interestRate)**months;

        let payments = amount*(interestRate*totalInterest/(totalInterest-1));
        let interestPaid = payments*months-amount;

        payments = payments.toFixed(2);
        interestPaid = interestPaid.toFixed(2);

        return { payments, interestPaid, amount };
    }

    

    render(){
        const { amount, months, years, rate, name } = this.props
        const information = this.renderCalculations(amount, months, years, rate)
        const totalAmount = parseFloat(information.amount)+parseFloat(information.interestPaid);

        if(name === 'FigTech'){
            return (
                <div className="results">
                    <h3>
                        {name}'s rate
                    </h3>
                    <div className="text">
                        <h5>Our Rate</h5>
                        <span className="numbers">
                            {rate}%
                        </span>

                        <h5>Our monthly payment</h5>
                        <span className="numbers">
                            {!isNaN(information.payments) ? information.payments : 0}
                        </span>
                    </div>

                    <div className="text">
                        <h5>Total Amount Paid</h5>
                        <span className="numbers">
                            {!isNaN(totalAmount) ? totalAmount : 0}
                        </span>
                        <h5>Interest Accumulated</h5>
                        <span className="numbers">
                            {!isNaN(information.interestPaid) ? information.interestPaid : 0}
                        </span>
                    </div>
                </div>
            )
        }

        
        return (
            <div className="results">
                <h3>
                    {name}'s rate
                </h3>
                <div className="text">
                    <h5>Payday Lender's Rate</h5>
                    <span className="numbers">
                        {rate}%
                    </span>
                    
                    <h5>Their Monthly Payment</h5>
                    <span className="numbers">
                        {!isNaN(information.payments) ? information.payments : 0}
                    </span>
                </div>
                <div className="text">
                    <h5>Total Amount Paid</h5>
                    <span className="numbers">
                        {!isNaN(totalAmount) ? totalAmount : 0}
                    </span>
                    
                    <h5>Interest Accumulated</h5>
                    <span className="numbers">
                        {!isNaN(information.interestPaid) ? information.interestPaid : 0}
                    </span>
                </div>
            </div>
        )
    }
}