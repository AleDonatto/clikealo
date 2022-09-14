export default{
    StateAssign( state, payload) {
        for( let key in payload ){
            //if(Object.prototype.hasOwnProperty.call(payload, key)) continue;

            if( !payload.hasOwnProperty( key ) ) continue;
            state[key] = payload[key];
        }
    }
}