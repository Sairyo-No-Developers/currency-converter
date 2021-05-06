import s from './CurrencyCard.module.scss';

export const CurrencyCard = ({ currency, amount, rate, thisCurrency, thisCurrencyRate }) => {
	console.log(rate);
	return (
		<div className={s.card}>
			<h2>{thisCurrency}</h2>
			<h3>
				{amount ? thisCurrency === currency ? (
					amount
				) : (
					(amount * rate[1] * thisCurrencyRate[0]).toFixed(4)
				) : (
					'0'
				)}
			</h3>
		</div>
	);
};
