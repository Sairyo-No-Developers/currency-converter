import { Fragment, useState } from 'react';
import { CurrencyCard } from '../CurrencyCard/CurrencyCard';
import { Input } from '../Input/Input';
import s from './Homepage.module.scss';
import loaderGif from '../../images/1479.gif';
import LargeFull from '../../images/Large-Full.png';

export const Homepage = ({ error, fetched, rates }) => {
	/*
      US Dollar	
Euro	
British Pound	
Australian Dollar	
Canadian Dollar	
Singapore Dollar	
Swiss Franc	
Malaysian Ringgit	
Japanese Yen	
Chinese Yuan Renminbi  
    */
	const [ currency, setCurrency ] = useState(localStorage.getItem('sndevs-mif-currency') || 'Indian Rupee');
	const [ amount, setAmount ] = useState(0.0);
	return (
		<div className={s.main}>
			<div className={s.mainDiv}>
				<div className="container">
					<div className={s.mainHeader}>
						<img src={LargeFull} alt="Money Is Funny" />
					</div>
					<div className={s.quote}>"Your Personal Currency Exchange"</div>
					<Input
						rates={rates}
						currency={currency}
						setCurrency={setCurrency}
						amount={amount}
						setAmount={setAmount}
					/>
					<div className={s.cardList}>
						{fetched ? (
							<Fragment>
								<CurrencyCard
									amount={amount}
									currency={currency}
									rate={currency === 'Indian Rupee' ? [ 1, 1 ] : rates[currency]}
									thisCurrency="Indian Rupee"
									thisCurrencyRate={[ 1, 1 ]}
								/>
								{Object.entries(rates).map((e) => {
									return (
										<CurrencyCard
											amount={amount}
											currency={currency}
											rate={currency === 'Indian Rupee' ? [ 1, 1 ] : rates[currency]}
											thisCurrency={e[0]}
											thisCurrencyRate={e[1]}
										/>
									);
								})}
							</Fragment>
						) : (
							<div className={s.loader}>
								<img src={loaderGif} alt="Loading" />
								<h4>Loading...</h4>
							</div>
						)}
					</div>
				</div>
			</div>
			<footer className={s.footer}>
				<span>
					Made with ❤️ by <a href="https://www.abhishekadhikari.rocks/">Abhishek Adhikari</a>,{' '}
					<a href="https://github.com/AniketdCR7/">Aniket Datta</a> and{' '}
					<a href="https://github.com/Amartya0/">Amartya Jash</a> |{' '}
					<a href="https://www.sairyonodevs.in/">Sairyö No Developers</a>
				</span>
			</footer>
		</div>
	);
};
