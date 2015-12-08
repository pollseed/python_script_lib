package utils;

import java.util.stream.IntStream;

import org.junit.Test;

import printer.CommandPrinter;

public class BubbleSort implements CommandPrinter {
    public int[] sort(final int[] arr) {
        final int arrLen = arr.length;
        boolean isLoop = true;
        int ai = 0;
        while (isLoop) {
            ai = 0;
            for (int i = 0; i < arrLen - 1; i++) {
                if (arr[i + 1] < arr[i]) {
                    final int tmp = arr[i + 1];
                    arr[i + 1] = arr[i];
                    arr[i] = tmp;
                } else {
                    ai++;
                }
                if (ai == arrLen - 1) {
                    isLoop = false;
                }
            }
        }
        return arr;
    }

    @Test
    public void test_sort() {
        logger(() -> {
            lnLine("[after]");
            logger(sort(logger(() -> {
                int[] test = new int[100];
                lnLine("[before]");
                IntStream.range(0, 100).forEach(i -> {
                    if (i % 15 == 0)
                        test[i] = r(15, i, 3);
                        else if (i % 3 == 0)
                            test[i] = r(3, i, 10);
                        else if (i % 5 == 0)
                            test[i] = r(5, i, 7);
                        else
                            test[i] = r(1, i, 2);
                    });
                logger(test);
                return test;
            })));
            return null;
        });
    }

    private static int r(int a, int b, int c) {
        return Math.abs((int) (Math.random() * 10 * a * b - b) << c);
    }

    @FunctionalInterface
    private interface Log {
        int[] logger();
    }

    private int[] logger(Log l) {
        return l.logger();
    }

    private void logger(int[] test) {
        for (final int t : test) {
            ln(t);
        }
    }
}
