# Money Is Funny
"Your Personal Currency Exchange"

## Overview
---
Welcome, to our webapp, here you can input any currency value of your choice and our ghost will fetch you it's value in all other currencies of the world. Beware it can turn out to be a bit haunted! Hope you find this experiance unique and useful.

## Documentation
---
We created this webapp using **React**. Since we tried to make this project as minimal as we can, the backend is quite simple, we used **Python3** and **Flask** for this purpose. 
For Currency convertion we didn't use any API. We used the method of **Web Scrapping** to satisfy the purpose. We used the site: [X-Rates Currency Excahnge Table](https://www.x-rates.com/table/?from=INR&amount=1), for the purpose of Web Scrapping, and did it using Python3 and **BeautifulSoup4**. A reason we preffered not to use any APIs, we didn't wanted to use any paid API. 


## Dev Stack Used
---
- NodeJs
- Python3
- React
- Flask
- BeautifulSoup4
- Nginx Server
- Works on all browsers

## Install And Use In Your Local Machine
---
First startup the backend
```sh
cd backend\
python -m venv env3
pip install -r requirements.txt
python app.py
```
Now finally let's start the frontend
```sh
cd frontend\
npm run ci
npm run start
```

If you want to make a production build just use the normal create-react-app's command.
```sh
npm run build
```

## Our Targeted Goals
---
- [x] Create a minimal dark theme design using Bootstrap5 and Sass.
- [x] For currency rates, scraping the web for it instead of using an api.
- [x] Using Flask alogn with proper CORS setup.
- [ ] Setup proper testing in React using Jest.
- [x] Built and Deployed to web using Nginx with ssl within 3 hours.

## Thanks For Taking Time In Viewing Our Project
---
Feel free to contribute to this project or contact us for any queries. Please fork it and give it a start. Every star motivates us in doing these mini-projects.

Made with ❤️ by Abhishek Adhikari, Aniket Datta and Amartya Jash.