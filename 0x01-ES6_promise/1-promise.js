
let p = new Promise(getFullResponseFromAPI(resolve, reject)
	rt default function (boolean) {
		  return new Promise((resolve, reject) => {
			      const object = {
				            status: 200,
				            body: 'Success',
				          };

			      if (boolean === true) {
				            resolve(object);
				          } else {
						        reject(Error('The fake API is not working currently'));
						      }
			    });
	}
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
