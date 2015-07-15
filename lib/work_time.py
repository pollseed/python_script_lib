from datetime import datetime as dt
from datetime import date as d

class WorkTime(object):
        DAY_OF_THE_WEEK = {0:"monday",1:"tuesday",2:"wednesday",3:"thursday",4:"friday",5:"satarday",6:"sunday"}
        HOUR = 60

        def set_value(self,weekday):
                for k,v in self.DAY_OF_THE_WEEK.items():
                        if k == weekday:
                                print('What time is working end time of {0}?'.format(v))
                                return int(input())

        def get_time(self,hour):
                rest = (lambda x: round(float(((hour - x.hour) * self.HOUR - x.minute) / self.HOUR), 3))(dt.now())
                print('lasttime :{0}h'.format(hour))
                print('resttime :{0}h'.format(rest))

        def __init__(self):
                self.get_time(self.set_value(d.today().weekday()))

if __name__ == '__main__':
        WorkTime()
