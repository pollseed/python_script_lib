from datetime import datetime as dt
from datetime import date as d

class WorkTime(object):
        LAST_HOUR = {"0":19,"1":17.83,"2":19,"3":17.83,"4":17.83,"5":0,"6":0}
        HOUR = 60

        def get_time(self,hour):
                rest = (lambda x: (hour - x.hour) * self.HOUR - x.minute)(dt.now())
                print('lasttime :{0}h'.format(hour))
                print('resttime :{0}h'.format(float(rest / 60)))

        def __init__(self):
                self.get_time(self.LAST_HOUR[str(d.today().weekday())])

if __name__ == '__main__':
        Work()
