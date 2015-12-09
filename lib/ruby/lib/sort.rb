class BubbleSort
    def initialize
    end

    def sort arr
        len,is_loop,ai=arr.length,true,0
        while is_loop
            ai = 0
            (len-1).times {|_|
                if arr[_] > arr[_+1] then arr[_+1],arr[_] = arr[_], arr[_+1]
                else ai += 1
                end
                is_loop=false if ai==len-1
            }
        end
        arr
    end
end
