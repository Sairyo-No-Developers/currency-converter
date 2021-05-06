import s from './Input.module.scss';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const Input = ({ rates, currency, setCurrency, amount, setAmount }) => {
	return (
		<div>
			<label className={[ 'mt-5', s.label ].join(' ')}>Enter Your Amount</label>
			<div className={[ 'input-group mb-3', s.inputGroup ].join(' ')}>
				<input
					type="number"
					className="form-control"
					aria-label="Enter Price and Select Currency"
					placeholder="Enter Amount"
					value={amount}
					min="0"
					onChange={(e) => {
						setAmount(parseFloat(e.target.value));
					}}
				/>
				<button
					className="btn btn-secondary dropdown-toggle"
					type="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					{currency}
				</button>
				<ul className={[ 'dropdown-menu dropdown-menu-end', s.dropdownMenu ].join(' ')}>
					<li
						key={nanoid()}
						onClick={() => {
							setCurrency('Indian Rupee');
							localStorage.setItem('sndevs-mif-currency', 'Indian Rupee');
						}}
					>
						<span className={[ 'dropdown-item', s.dropdownItem ].join(' ')}>Indian Rupee</span>
					</li>
					<li>
						<hr />
					</li>
					{Object.entries(rates).map((e) => {
						return (
							<li
								key={nanoid()}
								onClick={() => {
									setCurrency(e[0]);
									localStorage.setItem('sndevs-mif-currency', e[0]);
								}}
							>
								<span className={[ 'dropdown-item', s.dropdownItem ].join(' ')}>{e[0]}</span>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
