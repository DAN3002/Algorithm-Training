import sys
import math
# Config 
TEST_MODE = False
NUM_OF_TEST = 1

def RGBtoHSV(R,G,B):
    # min, max, delta;
    min_rgb = min( R, G, B )
    max_rgb = max( R, G, B )
    V = max_rgb

    delta = max_rgb - min_rgb
    if not delta:
        H = 0
        S = 0
        V = R # RGB are all the same.
        return H,S,V
        
    elif max_rgb: # != 0
        S = delta / max_rgb
    else:
        R = G = B = 0 # s = 0, v is undefined
        S = 0
        H = 0 # -1
        return H,S,V

    if R == max_rgb:
        H = ( G - B ) / delta # between yellow & magenta
    elif G == max_rgb:
        H = 2 + ( B - R ) / delta # between cyan & yellow
    else:
        H = 4 + ( R - G ) / delta # between magenta & cyan

    H *= 60 # degrees
    if H < 0:
        H += 360

    if H > 0:
        H -= 360
    
    return (H,S,V)

# Solver
def solver(content):
    # r, g, b = [int(i) for i in content[0].split(' ')]
    r, g, b = [int(i) for i in input().split(' ')]
    r, g, b = r/255.0, g/255.0, b/255.0

    # h,s,v = RGBtoHSV(r, g, b)
    # print(h * 255, s * 55, v * 255)
    
    mx = max(r, g, b)
    mn = min(r, g, b)
    df = mx-mn
    if mx == mn:
        h = 0
    elif mx == r:
        h = (60 * ((g-b)/df) + 360) % 360
    elif mx == g:
        h = (60 * ((b-r)/df) + 120) % 360
    elif mx == b:
        h = (60 * ((r-g)/df) + 240) % 360
    if mx == 0:
        s = 0
    else:
        s = (df/mx)*100
    v = mx*100

    if h > 360:
        h -= 360
    
    if h < 0:
        h += 360

    print(str(round(h)) + ' ' + str(round(float(s),1)) + ' '+str(round(float(v), 1)))


def solveByPath(path):
    with open(path) as f:
        content = f.readlines()
    content = [x.strip() for x in content]
    solver(content)

if __name__ == '__main__':
    if TEST_MODE:
        for i in range(1, NUM_OF_TEST + 1):
            problem = sys.argv[0].replace('.py', '')
            path = f'testcase/samples-{problem}/{i}.in'
            print('----------')
            print('TestCase ' + str(i))
            solveByPath(path)

    else:
        solver(None)



