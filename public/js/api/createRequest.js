/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener ('readystatechange',()=>{
        if(xhr.readyState === xhr.DONE){
                console.log(xhr.readyState)
            };
        });

        try{
            if(options.method === 'GET'){
                    xhr.open(options.method, `${options.url}?email=${options.data.email}&password=${options.data.password}`);
                    xhr.responseType = 'json';
                    xhr.send();
                }else{               
                    xhr.open(options.method, options.url);

                    let formData = new FormData();
                    formData.append('email', options.data.email);
                    formData.append('password', options.data.password);        
                    
                    xhr.responseType = 'json';                
                    xhr.send(formData);    
                };

                options.callback
            
                     
        } catch(e){
            console.log(e);
        };
    
};
