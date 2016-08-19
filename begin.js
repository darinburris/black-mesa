const createAssetsServer = require('./server')

//params = PORT, HOT, PROTO, INLINE
createAssetsServer(8080, false, true, true);