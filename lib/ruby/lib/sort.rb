class BubbleSort
    def initialize
    end

    def sort arr
        len,is_loop,ai=arr.length,true,0
        while is_loop
            ai = 0
            (len-1).times {|i|
                if arr[i] > arr[i+1]
                    arr[i+1],arr[i] = arr[i], arr[i+1]
                else
                    ai += 1
                end
                (->v{is_loop=false if ai==v-1}).call len
            }
        end
        arr
    end
end
