import os
import subprocess
import datetime
from datetime import datetime as dt

# Dummy paths
TOMCAT_LOGS_PATH = '/usr/local/tomcat7/logs'

SHELL_RM = lambda x: subprocess.call('rm -rf {0}'.format(x), shell=True)
SHELL_TAR_OPTION = lambda x, y, z: subprocess.call('tar {0} {1} {2}'.format(x, y, z), shell=True)
SHELL_TAR_TF = lambda x: subprocess.call('tar -tf {0}'.format(x), shell=True)

def tomcat_log_backup():
    os.chdir(TOMCAT_LOGS_PATH)
    today = dt.today()
    backup_file = ''
    tar_root = 'localhost_access_log.{0}-{1}.tar'.format(today.year, "%02d" % (today.month))
    tar_leaf = ['localhost_access_log.{0}-{1}-{2}*'.format(today.year, "%02d" % (today.month), x) for x in range(int(str(today.day)[0]))]

    if os.path.isfile(tar_root):
        SHELL_TAR_OPTION('rf', tar_root, tar_leaf[-1])
        SHELL_RM(tar_leaf[-1])
        SHELL_TAR_TF(tar_root)
    else:
        for i in tar_leaf:
            SHELL_TAR_OPTION('cvf' if i == 0 else 'rf', tar_root, i)
            SHELL_RM(i)
            SHELL_TAR_TF(tar_root)

if __name__ == '__main__':
    TOMCAT_LOGS_PATH = input('please input your tomcat\'s logs path and enter.')
    tomcat_log_backup()
