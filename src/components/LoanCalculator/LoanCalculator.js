import React, { Component } from 'react';
import ReactTooltip from "react-tooltip";
import './LoanCalculator.css'
import Results from '../Results/Results';

export default class LoanCalculator extends Component {
    constructor(props){
        super(props)
        this.state={
            months: 12,
            years: 1,
            amount: 5000,
            rate: 5,
            monthsError: "",
            amountError: "",
            yearsError: "",
            rateError: ""
        }
    }

    handleSubmit = e => {
        e.preventDefault()

        return 
    }

    changeMonths = (e) => {
        const months = e.target.value ? e.target.value : '';
        this.setState({
            months: months,
            monthsError: ''
        })
    }

    handleMonths = (e) => {
        const months = e.target.value ? e.target.value : '';
        if(months%12 !== 0 || months <= 0){
            this.setState({
                months:  months,
                monthsError: 'Please pick a loan term in multiples of 12'
            })
        }else{
            if(Number.isInteger(months/12) && months > 0){
                this.setState({
                    years: months/12
                })
            }
            this.setState({
                months:  months,
                monthsError: "",
            })
        }
    }

    changeYears = (e) => {
        const years = e.target.value ? e.target.value : '';
        this.setState({
            years: years,
            yearsError: ''
        })
    }

    handleYears = (e) => {
        const years = e.target.value ? e.target.value : '';
        if(years <= 0){
            this.setState({
                yearsError: "Loan term in years must be greater than 0",
                years: years
            })
        }else{
            if(years > 0){
                this.setState({
                    months: (years*12)
                })
            }
            this.setState({
                years:  years,
                yearsError: ""
            })
        }
    }

    changeAmount = (e) => {
        const amount = e.target.value ? e.target.value : '';
        this.setState({
            amount: amount,
            amountError: ''
        })
    }

    handleAmount = (e) => {
        const amount = e.target.value ? e.target.value : '';
        if(amount < 500){
            this.setState({
                amount: amount,
                amountError: "Please choose a loan amount larger than or equal to 500"
            })
        }else{
            this.setState({
                amount: amount,
                amountError: ''
            })
        }
    }

    changeRate = (e) => {
        const rate = e.target.value ? e.target.value : '';
        this.setState({
            rate: rate,
            rateError: ''
        })
    }

    handleRate = (e) => {
        const rate = e.target.value ? e.target.value : '';
        if(rate <= 0){
            this.setState({
                rate: rate,
                rateError: "Please choose a rate larger than 0."
            })
        }else{
            this.setState({
                rate: rate,
                rateError: ''
            })
        }
    }

    render(){
        return(
            <div className="loanBox">
                <h2>Loan Calculator</h2>
                <p className='details'>
                    This calculator will compute how much a monthly payment will be for a given loan amount.  Enter the loan amount, number of willing payments and interest rate given to you.  We will then compare our results with those found by an average payday lender for you to see as comparison.
                </p>
                <div className="calculator">
                    <div className="background">
                        <div className="background2">
                            <form 
                                className="loan" 
                                onSubmit={(e)=>this.handleSubmit(e)} 
                                autoComplete="off">

                                <div className='loan-amount'>
                                    <label htmlFor='amount' >
                                        Loan Amount
                                    </label>
                                    <input 
                                        name='amount' 
                                        id='amount' 
                                        value={this.state.amount} 
                                        onBlur={(e) => this.handleAmount(e)} 
                                        onChange={(e)=>this.changeAmount(e)}
                                        />
                                    <span>
                                        {this.state.amountError}
                                    </span>
                                </div>

                                <div className='loan-term'>
                                    <label 
                                        htmlFor='term' 
                                        data-tip 
                                        data-for="term" >
                                        Loan term in Months
                                    </label>
                                    <ReactTooltip id="term">
                                        If payment seems to be too high,<br/> make the loan term longer.
                                    </ReactTooltip>
                                    <input 
                                        name='termMonths' 
                                        id='termMonths' 
                                        onBlur={(e) => this.handleMonths(e)} 
                                        onChange={(e) => this.changeMonths(e)} 
                                        value={this.state.months}/>
                                    <span>
                                        {this.state.monthsError}
                                    </span>
                                </div>

                                <div className='loan-term'>
                                    <label 
                                        htmlFor='term' 
                                        data-tip 
                                        data-for="term" >
                                        Loan term in Years
                                    </label>
                                    <ReactTooltip id="term">
                                        If payment seems to be too high,<br/> make the loan term longer.
                                    </ReactTooltip>
                                    <input 
                                        name='termYears' 
                                        id='termYears' 
                                        onBlur={(e)=> this.handleYears(e)} 
                                        onChange={(e) => this.changeYears(e)} 
                                        value={this.state.years} />
                                    <span>
                                        {this.state.yearsError}
                                    </span>
                                </div>

                                <div className='interest-rate'>
                                    <label 
                                        htmlFor='rate' 
                                        data-tip 
                                        data-for="apr-details">
                                        Yearly Interest Rate
                                    </label>
                                    <ReactTooltip id="apr-details">
                                        APR is the annual percentage rate <br/> of interest for your loan
                                    </ReactTooltip>
                                    <input 
                                        placeholder="%" 
                                        name='rate' 
                                        id='rate' 
                                        onBlur={(e) => this.handleRate(e)} 
                                        onChange={(e) => this.changeRate(e)} 
                                        value={this.state.rate} />
                                    <span>
                                        {this.state.rateError}
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="loan-results">
                        <Results 
                            amount={this.state.amount  > 0 ? this.state.amount : 0} 
                            months={(this.state.months > 0) ? this.state.months : 0} 
                            years={(this.state.years > 0) ? this.state.years : 0} 
                            rate={(this.state.rate > 0) ? this.state.rate : 0} 
                            name={"FigTech"}/>
                        <Results 
                            amount={this.state.amount  > 0 ? this.state.amount : 0} 
                            months={this.state.months > 0 ? this.state.months : 0} 
                            years={this.state.years > 0 ? this.state.years : 0} 
                            rate={398} 
                            name={"Payday Lender"}/>
                    </div>
                </div>
            </div>
        )
    }
}