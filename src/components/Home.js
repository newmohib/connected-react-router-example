import React,{Component} from 'react'

// const Home = (props) => (
//   <div>
   
//     Home
//   </div>
// )

// export default Home


class Home extends Component {

  render() {
    let history=this.props.history;
    
    const  handelRedirect=(input) =>{
      const unblock = history.block('Are you sure you want to leave this page?');
      if (unblock) {
        if (input==='1') {
          history.push("/hello");
        }else if(input === '2'){
          history.push("/counter")
        }else{
          history.push("/")
        }
      }  
      
    }

    const goPage=(input)=>{
      const unblock = history.block('Are you sure you want to leave this page?');
      let user='Mohib'
      if (unblock) {
        if (input==='back') {
          history.goBack()
        }else if(input==='back2'){
          history.go(-1)
        }else if(input==='with_query'){
          history.push({
            pathname: '/hello',
            search: `name=${user}`,
            // state: { some: 'state' }
          });
        }
      }
      
    }
    console.log(this.props.history)
    return ( 
      <div>
        <div>
          Home
        </div>
        <div>
          <button onClick={()=>handelRedirect('1')}>Hello</button>
          <button onClick={()=>handelRedirect('2')}>Counter</button>
          <button onClick={()=>goPage('back')}>Back</button>
          <button onClick={()=>goPage('back2')}>Back2</button>
          <button onClick={()=>goPage('with_query')}>Hillo and Query</button>
          
        </div>
      </div>
      
     );
  }
}
 
export default Home;
