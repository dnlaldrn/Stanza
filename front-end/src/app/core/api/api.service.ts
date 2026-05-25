import { Injectable } from '@angular/core';
import { supabase } from '../config/supabase.client';

@Injectable({
  providedIn:'root'
})
export class ApiService {

  async getProperties(){

    const {data,error} =
      await supabase
      .from('properties')
      .select('*');

    if(error) throw error;

    return data;

  }

  async addProperty(property:any){

    const {error} =
      await supabase
      .from('properties')
      .insert(property);

    if(error) throw error;

  }

}