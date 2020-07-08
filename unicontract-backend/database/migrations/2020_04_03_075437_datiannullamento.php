<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use App\Precontrattuale;

class Datiannullamento extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $revoc = ['192','193','227','241','246','592','612','613','709','786','916','1444','1454','1487','1504','1505',
            '1514','1591','1616','1688','1800','1884','1885','1981','2093','2166','2317','2363','2387','2400','2421','2432','2434',
            '2456','2477','2486','2487','2656','2944','2963','2966','2967','2968','2969','2970','2971','2972','2973','2976','2977'];

        $rinu = ['101','240','965','1478','1480','1481','1482','1491','1492','1509','1524','1696','1697','1698','1935','1936','2095','2178',
            '2208','2209','2281','2506','2605','2706','2962','2964','2965','2974','2975','2978','2979','2980'];


        DB::table('precontr')->whereIn('id',$revoc)->where('stato',2)->update(['tipo_annullamento' => 'REVOC']);
        DB::table('precontr')->whereIn('id',$rinu)->where('stato',2)->update(['tipo_annullamento' => 'RINU']);

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        $revoc = ['192','193','227','241','246','592','612','613','709','786','916','1444','1454','1487','1504','1505',
        '1514','1591','1616','1688','1800','1884','1885','1981','2093','2166','2317','2363','2387','2400','2421','2432','2434',
        '2456','2477','2486','2487','2656','2944','2963','2966','2967','2968','2969','2970','2971','2972','2973','2976','2977'];

        $rinu = ['101','240','965','1478','1480','1481','1482','1491','1492','1509','1524','1696','1697','1698','1935','1936','2095','2178',
        '2208','2209','2281','2506','2605','2706','2962','2964','2965','2974','2975','2978','2979','2980'];

        DB::table('precontr')->whereIn('id',$revoc)->where('stato',2)->update(['tipo_annullamento' => null]);
        DB::table('precontr')->whereIn('id',$rinu)->where('stato',2)->update(['tipo_annullamento' => null]);
    }
}