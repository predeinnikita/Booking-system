import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IDevice, IDevices } from '../models/interfaces';
import { map, Observable } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { IAddDeviceData } from '../modules/booking/models/interfaces';

@Injectable()
export class DevicesService {

  constructor(
    private http: HttpClient,
    private accountService: AccountService
  ) {
      this.getAllDevices();
   }

   public getAllDevices() : Observable<IDevice[]>{
    const url = `https://${this.accountService.host}/device/not-booked`;
    const options = {
      withCredentials: true
    }
    return this.http.get<IDevice[]>(url, options);
  }

  public getUserDevices() : Observable<IDevice[]>{
    const url = `https://${this.accountService.host}/device/my-bookings`;
    const options = {
      withCredentials: true
    }
    return this.http.get<IDevice[]>(url, options);
  }

  public getDeviceById(id: number) : Observable<IDevice> {
    const url = `https://${this.accountService.host}/device/${id}`;
    const options = {
      withCredentials: true
    }
    return this.http.get<IDevice>(url, options);
  }

  public addDevice(data: IAddDeviceData) {
    const url = `https://${this.accountService.host}/device`;
    return this.http.post(url, data, {
      withCredentials: true
    })
  }
}
