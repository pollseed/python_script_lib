# -*- coding: utf-8 -*-
from datetime import datetime as dt
from datetime import date as d

"""
python work_time.py
What time is working end time of {__day of the week__}?
Plerase your today's working-end hour >>>

Is accepted as a positive number only input value
"""
class WorkTime(object):
    DAY_OF_THE_WEEK = {
            0: "monday",
            1: "tuesday",
            2: "wednesday",
            3: "thursday",
            4: "friday",
            5: "saturday",
            6: "sunday"
            }
    ONE_HOUR = 60

    def get_ending_hour(self,weekday):
        for k,v in self.DAY_OF_THE_WEEK.items():
            if k == weekday:
                try:
                    ending_time = float(input(
                                'What time is working end time of \'{0}\'? > '.format(v)))
                    if ending_time > 0 and ending_time > dt.now().hour:
                        return ending_time
                    raise ValueError('0 > input value and now-time')
                except ValueError as e:
                    self.__print_error(e)
                    return self.get_ending_hour(weekday)

    def get_break_time(self):
        try:
            break_time = input('Do you have a break?(y/n)')
            if break_time != 'y' and break_time != 'n':
                raise ValueError('only use \'y\' or \'n\'')
            return 1 if break_time == 'y' else 0
        except ValueError as e:
            self.__print_error(e)
            return self.get_break_time()

    def get_time(self,hour,break_time):
        print('resttime :{0}h'.format(
            (lambda x: round(float(
                ((hour - x.hour) * self.ONE_HOUR - x.minute) / self.ONE_HOUR - break_time)
            , 3))(dt.now())))

    def __print_error(self,e):
        print((lambda x: '[{0}]\nPlease enter again!'.format(x))(e))

    def __init__(self):
        self.get_time(self.get_ending_hour(d.today().weekday()), self.get_break_time())

if __name__ == '__main__':
    WorkTime()
