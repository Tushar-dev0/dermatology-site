import React, { useState } from 'react';
import { DatePicker, TimePicker } from 'antd';
import moment from 'moment';
import toast from 'react-hot-toast';

const BookAppointment = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => setName(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleDateChange = (date) => setDate(date);
  const handleTimeChange = (time) => setTime(time);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required.';
    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = 'Phone number must be 10 digits.';
    }
    if (!date) newErrors.date = 'Date is required.';
    if (!time) newErrors.time = 'Time is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log({ name, phone, date, time, message });
    toast.success('Appointment successfully booked!');

    // Reset form
    setName('');
    setPhone('');
    setDate(null);
    setTime(null);
    setMessage('');
    setErrors({});
  };

  // Disable past dates
  const disablePastDates = (current) => {
    return current && current < moment().startOf('day');
  };

  // Disable past times when the selected date is today
  const disablePastTimes = () => {
    if (!date) return {};
    const selectedDate = moment(date).startOf('day');
    const today = moment().startOf('day');

    if (selectedDate.isSame(today)) {
      const currentHour = moment().hour();
      const currentMinute = moment().minute();

      return {
        disabledHours: () =>
          Array.from({ length: currentHour }, (_, i) => i),
        disabledMinutes: (selectedHour) =>
          selectedHour === currentHour
            ? Array.from({ length: currentMinute }, (_, i) => i)
            : [],
      };
    }
    return {};
  };

  return (
    <div className="max-w-md mx-auto mt-10 mb-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
        Book an Appointment
      </div>
      <form className="py-4 px-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={handlePhoneChange}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
            Date
          </label>
          <DatePicker
            className="w-full"
            onChange={handleDateChange}
            value={date}
            format="YYYY-MM-DD"
            disabledDate={disablePastDates}
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="time">
            Time
          </label>
          <TimePicker
            className="w-full"
            onChange={handleTimeChange}
            value={time}
            format="HH:mm"
            {...disablePastTimes()}
          />
          {errors.time && (
            <p className="text-red-500 text-sm mt-1">{errors.time}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows={4}
            placeholder="Enter any additional information"
            value={message}
            onChange={handleMessageChange}
          />
        </div>
        <div className="flex items-center justify-center mb-4">
          <button
            className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookAppointment;
