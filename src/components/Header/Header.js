import React from 'react'
import './Header.scss'
import mus from '../../assets/oink.ogg'

export default function Header (props) {
  let audio = new Audio(mus)
  let menu = [
    {
      text: 'Oink.',
      href: 'https://goo.gl/Fxeifz',
      id: 1
    },
    {
      text: 'Oink?',
      href: 'https://goo.gl/Fxeifz',
      id: 2
    },
    {
      text: 'Oink!',
      href: 'https://goo.gl/Fxeifz',
      id: 3
    }
  ]

  return (
    <header>
      <a id='logo' href='https://goo.gl/Fxeifz'>
        <svg xmlns='http://www.w3.org/2000/svg' width='931pt' height='718pt' viewBox='0 0 931 718' version='1.1' onMouseOver={() => { audio.play() }}>
          <path d=' M 284.22 0.00 L 284.59 0.00 C 285.02 3.38 288.45 5.45 290.08 8.38 C 292.26 16.08 296.78 22.77 300.30 29.87 C 303.18 33.81 304.60 38.56 307.33 42.59 C 310.00 46.54 311.22 51.33 314.40 54.94 C 314.56 57.25 313.84 59.84 315.12 61.93 C 319.57 67.50 323.72 73.35 327.84 79.13 C 333.95 82.15 339.57 86.09 345.45 89.51 C 350.81 91.03 355.07 86.40 359.91 84.96 C 363.89 83.87 366.95 80.92 370.87 79.72 C 382.96 73.29 395.51 67.74 407.44 61.07 C 409.54 60.38 411.63 59.57 413.47 58.30 C 416.09 56.47 419.36 55.93 421.97 54.06 C 424.62 52.14 428.16 51.85 430.60 49.60 C 431.74 48.07 432.58 46.32 434.05 45.06 C 437.12 42.40 438.94 38.65 442.07 36.04 C 447.62 28.71 453.72 21.82 459.52 14.69 C 462.42 12.11 463.87 8.27 467.21 6.13 C 466.97 13.12 468.70 19.98 468.36 26.96 C 466.07 34.46 464.19 42.10 461.71 49.55 C 460.41 55.46 457.78 61.08 457.06 67.09 C 464.70 65.63 471.70 62.07 478.90 59.27 C 489.58 55.44 500.00 50.88 510.74 47.25 C 510.01 47.87 509.30 48.50 508.60 49.14 C 507.65 54.62 502.67 58.29 501.96 63.90 C 505.28 64.16 508.00 62.19 510.79 60.75 C 525.41 54.76 539.43 47.29 554.10 41.53 C 552.75 48.21 552.21 55.05 550.92 61.74 C 548.86 68.75 546.89 75.78 544.98 82.83 C 550.73 82.57 556.28 80.63 562.05 80.52 C 568.81 79.23 575.62 78.13 582.43 77.30 C 588.87 75.87 595.44 75.28 602.04 75.60 C 610.76 75.16 619.31 77.13 628.03 76.62 C 623.27 77.74 619.27 80.65 614.69 82.22 C 609.57 84.12 605.05 87.50 599.66 88.70 C 598.82 91.66 599.34 94.77 599.24 97.79 C 606.13 97.35 613.45 98.63 619.91 95.59 C 620.56 95.61 621.85 95.65 622.50 95.68 C 625.09 94.14 628.29 94.10 631.19 93.41 C 637.22 91.57 643.44 90.47 649.64 89.33 C 648.53 92.02 648.17 95.11 646.46 97.52 C 642.50 100.69 637.70 103.68 635.65 108.51 C 643.16 108.83 650.67 108.28 658.18 108.61 C 660.78 110.10 663.39 111.97 666.56 111.74 C 667.86 110.33 669.13 108.87 670.63 107.65 C 676.15 103.93 680.11 98.42 685.13 94.11 C 690.98 90.04 695.31 84.25 700.67 79.62 C 705.50 76.51 708.87 71.72 713.20 68.02 C 717.85 67.10 722.45 65.68 727.21 65.52 C 727.19 71.36 727.28 77.20 727.26 83.04 C 727.30 86.07 725.78 88.77 724.72 91.52 C 721.02 103.96 716.69 116.21 712.59 128.52 C 712.22 129.86 712.16 131.27 712.06 132.65 C 720.11 131.96 728.03 134.51 736.08 133.52 C 742.48 131.12 748.50 127.82 754.79 125.16 C 754.10 125.78 753.42 126.41 752.76 127.05 C 751.13 130.20 748.82 132.92 747.18 136.06 C 745.73 138.31 744.52 140.92 742.10 142.28 C 737.65 145.10 735.13 150.31 730.13 152.34 C 730.40 153.39 730.07 154.99 731.35 155.48 C 736.99 156.05 742.44 157.70 748.02 158.63 C 750.78 159.62 753.87 159.21 756.53 160.54 C 761.94 161.79 767.44 162.76 772.84 164.06 C 775.23 166.13 777.16 168.72 779.85 170.46 C 773.90 171.02 767.97 172.23 762.03 173.10 C 755.54 174.85 750.23 179.30 744.01 181.73 C 744.07 182.47 744.20 183.94 744.27 184.68 C 745.74 185.12 747.20 185.60 748.69 186.04 C 752.41 189.15 757.32 190.07 761.46 192.45 C 764.68 193.93 767.52 196.14 770.81 197.47 C 773.56 197.89 776.36 197.64 779.14 197.55 C 779.45 197.38 780.05 197.04 780.36 196.87 C 788.79 195.75 797.08 193.88 805.45 192.43 C 808.97 191.33 811.53 188.55 814.48 186.49 C 816.86 184.49 819.64 183.04 822.15 181.21 C 821.10 186.40 820.87 191.78 819.47 196.88 C 814.39 203.94 808.71 210.53 803.49 217.48 C 803.41 217.99 803.26 219.02 803.18 219.53 C 812.48 222.15 821.51 225.62 830.90 227.93 C 823.61 231.03 817.48 236.28 810.31 239.58 C 810.29 240.09 810.27 241.11 810.26 241.63 C 814.11 242.97 818.26 242.30 822.16 243.45 C 831.55 243.72 840.75 246.39 850.21 245.64 C 858.02 240.29 866.84 236.66 874.65 231.30 C 871.55 237.59 868.24 243.78 865.39 250.19 C 862.20 259.22 855.68 266.70 852.90 275.88 C 868.20 276.39 883.55 275.35 898.82 276.43 C 894.08 278.87 890.13 282.63 886.41 286.43 C 882.58 288.80 878.34 290.50 874.34 292.57 C 874.24 293.20 874.03 294.45 873.93 295.08 C 878.89 295.01 883.53 293.05 888.39 292.33 C 896.77 289.98 905.54 288.86 913.58 285.47 C 919.26 281.75 925.08 278.25 931.00 274.92 L 931.00 275.07 C 927.90 277.84 927.23 282.05 925.87 285.76 C 922.89 292.34 920.81 299.28 917.92 305.91 C 916.79 308.43 916.58 311.51 914.45 313.46 C 911.42 316.39 908.63 319.59 905.27 322.15 C 898.88 327.11 894.08 333.85 887.43 338.47 C 881.85 343.94 876.54 349.70 870.31 354.45 C 870.21 355.52 870.12 356.59 870.04 357.67 C 877.94 357.57 885.71 359.43 893.54 360.00 C 885.57 365.80 878.03 372.22 870.15 378.19 C 864.19 382.73 858.84 388.53 851.44 390.72 C 839.66 396.30 827.57 401.05 815.87 406.81 C 815.99 407.47 816.21 408.78 816.32 409.43 C 825.58 415.30 834.86 421.18 843.95 427.31 C 838.96 427.43 833.93 427.06 829.05 428.32 C 823.26 427.79 817.72 429.76 811.96 429.38 C 805.99 429.31 800.67 432.50 794.91 433.58 C 795.21 437.72 800.43 437.52 802.91 439.95 C 803.32 439.83 804.15 439.60 804.56 439.49 L 804.01 440.72 C 809.46 441.09 813.54 445.78 819.05 446.28 C 808.28 448.36 797.44 449.93 786.73 452.30 C 781.26 454.29 776.75 458.22 771.47 460.63 C 769.69 461.08 770.22 463.12 769.97 464.50 C 777.48 465.90 784.55 469.35 792.03 470.68 C 780.00 475.93 768.17 481.62 756.48 487.62 C 754.72 488.74 751.23 488.91 751.93 491.80 C 762.23 491.96 772.53 491.62 782.83 491.95 C 775.69 499.01 768.81 506.36 761.36 513.10 C 751.94 517.77 741.95 521.19 732.40 525.59 C 724.13 529.02 715.68 532.10 707.65 536.04 C 708.22 537.27 708.94 538.51 710.21 539.16 C 722.66 545.64 734.56 553.08 747.17 559.26 C 741.33 559.22 735.89 561.86 730.14 562.50 C 725.51 563.79 720.80 564.77 716.06 565.48 C 715.53 567.62 716.73 569.43 718.48 570.57 C 725.30 575.32 731.57 580.81 738.36 585.62 C 740.99 587.96 743.72 590.34 747.11 591.51 C 742.81 591.18 738.45 591.71 734.21 590.77 C 729.53 589.83 724.71 591.04 720.05 589.96 C 718.07 589.49 716.03 589.32 714.01 589.39 C 707.71 589.60 701.23 588.26 695.16 590.53 C 687.39 592.12 680.02 595.65 672.11 596.41 C 671.63 597.33 671.14 598.25 670.64 599.17 C 676.09 600.74 680.73 604.13 686.22 605.56 C 692.07 608.15 697.99 610.58 703.98 612.87 C 706.64 613.87 709.08 615.54 711.97 615.90 C 696.72 622.46 681.30 628.64 666.12 635.34 C 654.39 636.78 642.62 638.72 630.96 640.36 C 629.73 640.60 626.95 639.90 627.22 642.02 C 626.92 643.83 627.75 644.77 629.70 644.84 C 634.70 649.70 640.47 653.69 645.89 658.06 C 648.68 660.61 651.62 663.11 655.16 664.59 C 651.13 664.73 647.33 663.34 643.40 662.72 C 637.21 661.65 631.02 660.66 624.83 659.63 C 621.94 659.09 619.16 657.95 616.18 658.14 C 616.18 658.70 616.18 659.83 616.17 660.39 C 618.85 661.92 621.21 663.95 623.91 665.47 C 620.94 665.37 617.94 665.04 615.01 665.56 C 609.40 666.74 603.64 666.24 597.96 666.34 C 598.78 670.61 603.32 672.77 605.96 675.95 C 601.40 673.48 596.03 673.34 591.24 671.57 C 578.50 668.67 565.83 665.37 553.18 662.10 C 553.24 662.84 553.36 664.33 553.43 665.07 C 557.53 674.28 561.13 683.72 565.54 692.80 C 555.26 685.00 544.88 677.32 534.61 669.52 C 532.55 667.33 529.03 666.43 526.40 668.12 C 519.67 671.16 512.89 674.08 506.13 677.04 C 501.75 678.78 497.71 681.28 493.10 682.43 C 492.86 686.46 494.96 690.01 496.50 693.58 C 498.24 697.43 499.39 701.55 501.43 705.27 C 502.07 706.37 502.29 707.63 502.51 708.89 C 502.14 708.20 501.78 707.52 501.44 706.85 C 501.00 707.04 500.12 707.43 499.68 707.62 C 499.64 707.27 499.57 706.58 499.53 706.24 C 492.49 703.86 485.60 701.00 478.91 697.72 C 470.34 694.26 461.86 690.52 453.47 686.70 C 447.03 684.33 441.03 680.73 434.33 679.10 C 434.05 684.12 435.58 689.01 435.32 694.03 C 435.04 698.06 436.52 701.94 436.38 705.97 C 436.24 709.62 436.66 713.24 437.28 716.84 C 432.59 713.20 429.20 708.12 424.15 704.94 C 417.15 698.21 410.42 691.18 403.52 684.34 C 402.42 682.92 400.47 683.15 398.90 682.85 C 398.88 688.17 402.19 692.60 403.66 697.55 C 404.46 700.36 405.66 703.04 406.99 705.65 C 402.65 702.56 397.47 700.96 393.04 698.03 C 382.95 692.38 372.12 688.04 362.26 682.00 C 359.67 681.03 357.19 679.76 354.51 679.03 C 354.29 681.04 353.86 683.03 353.30 684.99 C 350.86 693.55 350.03 702.51 347.11 710.94 C 343.31 706.31 340.07 701.28 336.17 696.74 C 327.55 685.57 319.60 673.87 310.55 663.05 C 306.97 662.87 306.19 667.08 303.92 669.01 C 299.58 672.83 296.46 677.70 292.57 681.93 C 292.73 680.60 292.91 679.27 293.07 677.95 C 292.45 678.06 291.22 678.26 290.60 678.36 C 289.72 680.42 288.75 682.50 286.94 683.91 C 285.27 677.82 283.12 671.89 280.85 666.02 C 280.87 664.88 280.55 663.91 279.53 663.32 C 279.60 662.70 279.68 662.09 279.76 661.49 C 278.34 660.00 277.95 657.96 277.78 655.99 C 276.72 655.65 275.59 654.79 274.50 655.54 C 271.22 657.08 268.04 658.82 264.82 660.49 C 264.70 655.73 264.75 650.97 264.83 646.22 C 259.78 645.93 255.42 648.86 250.56 649.65 C 245.57 651.72 240.07 652.27 235.26 654.77 C 237.25 649.13 240.32 643.79 241.07 637.78 C 237.76 637.89 236.32 641.18 233.75 642.72 C 231.13 644.33 229.25 646.80 226.96 648.80 C 221.93 652.09 218.52 657.23 213.46 660.50 C 210.06 664.15 206.09 667.13 202.40 670.45 C 198.88 674.99 193.14 676.47 188.32 679.16 C 183.36 681.30 178.90 684.71 173.45 685.53 C 173.85 685.65 174.67 685.89 175.08 686.01 C 169.51 688.10 164.48 691.34 159.09 693.82 C 158.05 694.34 156.86 694.28 155.75 694.45 C 147.74 689.57 138.81 686.39 130.92 681.30 C 122.44 677.61 114.07 673.64 105.91 669.29 C 88.08 664.71 70.11 660.52 52.23 656.08 C 44.10 649.16 35.56 642.73 27.52 635.73 C 21.94 631.75 17.03 626.72 11.26 623.10 C 13.79 621.36 14.02 618.05 15.28 615.48 C 16.72 610.91 19.84 606.88 20.67 602.17 C 14.41 587.90 8.89 573.38 2.51 559.18 C 2.09 557.81 1.37 556.42 1.64 554.97 C 4.03 546.52 7.40 538.37 9.57 529.85 C 11.54 524.08 13.83 518.23 13.64 512.03 C 13.37 507.96 14.81 504.04 14.61 499.98 C 14.40 496.61 15.49 493.37 15.60 490.04 C 15.10 484.24 19.33 479.67 21.35 474.56 C 22.54 472.69 23.04 469.11 25.97 469.62 C 36.04 469.47 46.12 469.69 56.20 469.54 C 59.56 474.03 62.31 478.96 65.87 483.32 C 68.27 487.23 71.55 490.55 73.53 494.73 C 79.51 495.01 85.35 493.82 91.23 493.15 C 94.72 491.79 99.07 493.88 102.01 491.03 C 109.88 482.85 119.93 477.11 127.45 468.56 C 129.46 464.00 130.54 459.02 133.20 454.74 C 136.69 448.84 139.31 442.28 144.34 437.46 C 145.52 441.29 147.67 444.78 148.49 448.74 C 150.84 449.29 153.19 448.68 154.54 446.59 C 157.75 442.69 165.29 440.64 163.73 434.41 C 160.81 433.02 158.80 430.47 156.71 428.11 C 156.12 428.07 154.93 427.99 154.34 427.94 C 151.85 425.58 149.79 422.67 146.78 420.92 C 142.67 418.57 139.29 415.17 135.49 412.40 C 132.34 406.51 129.49 400.44 126.40 394.51 L 127.03 392.37 C 126.42 392.57 125.85 392.88 125.46 393.42 C 124.92 391.42 123.62 389.64 123.69 387.50 C 117.46 380.50 118.17 370.47 115.69 361.94 C 112.90 353.79 113.46 344.90 110.74 336.71 C 120.02 324.67 129.13 312.48 138.67 300.64 C 141.60 298.72 145.40 298.60 148.46 296.85 C 151.15 295.26 153.80 293.57 156.74 292.46 C 156.42 282.31 157.11 272.10 155.94 262.00 C 155.70 254.27 155.62 246.55 155.51 238.82 C 164.58 228.43 173.07 217.55 182.03 207.07 C 192.49 193.86 203.66 181.29 214.09 168.08 C 218.64 163.54 221.94 157.87 226.72 153.56 C 226.81 149.98 224.81 146.89 223.54 143.67 C 220.05 136.84 217.40 129.63 214.36 122.60 C 216.19 122.62 218.02 122.68 219.85 122.73 C 220.30 117.11 219.06 111.43 220.30 105.87 C 220.71 103.90 220.53 101.87 220.47 99.88 C 220.91 101.53 221.30 103.20 221.62 104.88 C 222.10 105.34 223.05 106.26 223.52 106.72 C 224.67 106.83 225.82 106.94 226.97 107.06 C 227.04 101.03 226.80 95.01 226.62 88.99 C 226.45 85.04 228.18 81.22 227.36 77.27 C 229.28 79.51 231.44 81.54 233.54 83.62 C 234.14 83.68 235.33 83.79 235.92 83.84 C 235.97 78.81 233.17 74.26 233.54 69.23 C 235.48 69.83 237.05 71.12 238.47 72.53 C 239.87 72.74 241.26 72.94 242.66 73.13 C 242.93 67.60 240.56 61.72 243.48 56.54 C 248.16 47.44 252.16 38.04 256.70 28.87 C 261.49 22.95 266.46 17.18 271.10 11.12 C 274.42 6.97 279.43 4.80 283.53 1.56 C 283.70 1.17 284.04 0.39 284.22 0.00 Z' />
        </svg>
        <span>InosukeElectronics</span>
      </a>
      <nav>
        <ul>
          {menu.map((item) => {
            return (
              <li key={item.id}><a href={item.href}>{item.text}</a></li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
