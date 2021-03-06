export interface IDevice {
    id: number;
    name: string;
    year: number;
    description: string;
    isBooked: boolean
    bookings: IBooking[]
}

export interface IBooking {
    id: number;
    deviceId: number;
    start: string;
    end: string;
    comment: string;
}

export interface IDevices {
    booked: IDevice[];
    notBooked: IDevice[];
}