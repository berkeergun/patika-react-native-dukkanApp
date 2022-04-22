import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from "./Detail.style"
import useFetch from '../../hooks/useFetch/useFetch'
import Config from 'react-native-config'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'

const Detail = ({route}) => {
  const {id} = route.params
  const {loading,data,error} = useFetch(Config.API_URL+ `/${id}`)


  if(loading){
    return <Loading />
  }
  if(error){
   return  <Error error={error} />
  }
  return (
    <ScrollView style={styles.container}>

      <Image source={{uri: data.image}} style={styles.image} />

        <View style={styles.body_container}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.description}>{data.description}</Text>
          <Text style={styles.price}>{data.price} $</Text>
        </View>

    </ScrollView>
  )
}

export default Detail