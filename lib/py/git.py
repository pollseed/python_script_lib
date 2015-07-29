import sys
import subprocess

"""
  python git.py <file>
  TODO commandで分岐させる
"""

"""
`git add <file>`
"""
def add(argv):
    if argv:
        subprocess.call("git add {0}".format(argv), shell=True)

"""
`git commit -m "add <file>"`
"""
def commit(argv):
    if argv:
        subprocess.call("git commit -m \"add {0}\"".format(argv), shell=True)

argv[1] = sys.argv
if argv:
    add(argv)
    commit(argv)
