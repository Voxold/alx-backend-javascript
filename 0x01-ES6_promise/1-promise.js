let p = new Promise(getFullResponseFromAPI(resolve, reject)
 {
	 const object={
		 status: 200,
		 body: 'success',
	 }
	 if (true){
	 	resolve(object)
	 }else{
	 reject(Error('The fake API is not working currently'));
	 }
 });
