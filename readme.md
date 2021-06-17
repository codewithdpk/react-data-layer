# react-data-layer

A data layer for reacts applications prohibits unnecessary loading of the same data by creating a cache of data inside session storage. 🚀

## Usage

```javascript
import { checkData,fetchData,updateNewData FLAGS } from 'react-data-layer';

const App = () =>{

    const [Products,setProducts] = useState([]);

    useEffect(()=>{
        /* checking if data is already loaded while component
          mounted first time in the app */
        /* pass your key */
        if(checkData("home_data") == FLAGS.DATA_EXIST){
            /* do not need to load data again, fetching data
            from session */
            /* or it will
            return if there is no data DATA_NOT_FOUND flag */
            const products = fetchData("home_data");
            setProducts(products);
        }else{
            /* it will load basically when this
            component will be rederred first
            time in the whole session */
            /* perform request */
            fetch(url,{
                type:'GET/POST',
                header:{`your headers`}
                body:{}
            }).then((response)=>response.json())
            .then((data)=>{
                setProducts(data);
                /* save data to session, will
                return DATA_SAVED flag for confirmation */
                updateNewData(data,"home_data");
            }).catch((err)=>console.log(err));
        }
    },[]);
}
```

You can create multiple layers of different data from other sections in the app. I will be updating more features soon in this like API integration, bulk cache, and all.🔥
