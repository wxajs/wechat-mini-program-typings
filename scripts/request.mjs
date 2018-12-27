import request from 'request';

const baseRequest = request.defaults({
	baseUrl: 'https://google.com'
});

baseequest({
	uri: '/search'
}, function(err, res){
	if(err) console.error(err);

	console.log(Object.keys(res));
});

