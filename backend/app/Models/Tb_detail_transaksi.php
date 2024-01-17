<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tb_detail_transaksi extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_transaksi',
        'id_paket',
        'qty',
        'keterangan'
    ];
    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
