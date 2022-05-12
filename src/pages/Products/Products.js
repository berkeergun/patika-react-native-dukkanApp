import {View, Button, FlatList, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Products.style';
import axios from 'axios';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard/';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
// import {ViewPropTypes} from 'deprecated-react-native-prop-types'; // ...
import Error from '../../components/Error/Error';
import { useDispatch, useSelector } from 'react-redux';


const Products = ({navigation,route}) => {
//                                      HOOK USEFETCH'E TAŞINDILAR
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState();
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//       try {
//         const response = await axios.get(Config.API_URL);
//         setData(response.data);
//         setLoading(false)
//       } catch (err) {
//         setError(err.message)
//         setLoading(false)
//       }
    
//   };
//                                      HOOK USEFETCH'E TAŞINDILAR

//   console.log("render")
//   console.log({loading, error, data:data.length} )
//   console.log("---------------------------------")

  // const dispatch = useDispatch()
  const {error,data,loading} = useFetch(Config.API_PRODUCT_URL)
  const user = useSelector(s => s.user)
  const handleProductSelect= (id) => {
      navigation.navigate("DetailPage",{id})

  }
  //direkt item'ı geçirip de yapabilirdik...
  const renderProduct = ({item}) => <ProductCard product={item} onSelect={() =>handleProductSelect(item.id)} />;

  if(loading){
      return <Loading />
  }
  if(error){
     return  <Error error={error} />
  }

  return (

    <View style={styles.container}>
      {/* <Button title='Logout' onPress={() => dispatch({type:"SET_USER", payload:{user:null}})} color="orange" /> */}
      {/* <Text style={{fontSize:20,color:"#000",textAlign:"center",}}>Hello {user.name.firstname}</Text> */}
      <FlatList data={data} renderItem={renderProduct} />
    </View>

    // <View style={{flex: 1}}>
    //     <View style={{flex: 1}}>
    //         <FlatList 
    //         data={data} 
    //         renderItem={renderProduct} 
    //         />
    //     </View>
    //   <Button title="go to details" onPress={() => navigation.navigate("DetailPage")} />
    // </View>

    
  );
};

export default Products;
