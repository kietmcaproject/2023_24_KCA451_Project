import { createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import { get } from '../services/ApiEndpoint';


export const updateData=createAsyncThunk('updateData',async()=>{
     try {
        const request=await get('/api/auth/CheckData')
        const response=request.data

        return response;
     } catch (error) {
          throw error
     }
})



 const initialState={
    loading:null,
    error:null,
    data:null
 }
const  DataSlice=createSlice({
    name:"Data",
    initialState:initialState,
    reducers:{
        SetData:(state,action)=>{
            state.data= action.payload
        }
    },

    extraReducers:(builder)=>{
        builder.addCase(updateData.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(updateData.fulfilled,(state,action)=>{
            state.loading=null,
            state.data=action.payload
        })
        builder.addCase(updateData.rejected,(state,action)=>{
            state.loading=null,
            state.error=action.error.message,
            state.data=null
            
        })
    }
   
})

export const {SetData}=DataSlice.actions

export default DataSlice.reducer