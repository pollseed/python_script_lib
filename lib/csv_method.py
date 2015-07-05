import sys
import csv

USAGE = 'Usage: python [--read <file>] [--insert <file> <insert_word>]'
IDXERR_MESSAGE = lambda x: 'Index error: {0}'.format(x)
IOERR_MESSAGE = lambda x: 'I/O error: {0}'.format(x)

def option_parser():
    argv = sys.argv
    if len(argv) == 1:
        return USAGE
    argv.pop(0)
    options = [option for option in argv if option.startswith('-')]

    if '-h' in options or '--help' in options:
        return USAGE
    if '-r' in options or '--read' in options:
        position = argv.index('-r') if '-r' in options else argv.index('--read')
        try:
            csv_file = argv[position + 1]
        except IndexError as err:
            print(IDXERR_MESSAGE(err))
            return USAGE
        except:
            raise
        read(argv[position + 1])
    if '-i' in options or '--insert' in options:
        position = argv.index('-i') if '-i' in options else argv.index('--insert')
        try:
            csv_file = argv[position + 1]
            word = [argv[position + 2]]
        except IndexError as err:
            print(IDXERR_MESSAGE(err))
            return USAGE
        except:
            raise
        insert(argv[position + 1], [argv[position + 2]])

def read(csv_file):
    try:
        f = open(csv_file, 'rU')
        r = csv.reader(f)
        for row in r:
            if len(row) < 1:
                continue
            print(row)
        f.close()
    except IOError as err:
        print(IOERR_MESSAGE(err))
    except:
        raise

def insert(csv_file, insert):
    try:
        f = open(csv_file, 'w')
        w = csv.writer(f)
        w.writerow(insert)
        f.close()
    except IOError as err:
        print(IOERR_MESSAGE(err))
    except:
        raise

if __name__ == '__main__':
    result = option_parser()
    if result:
        print(result)
